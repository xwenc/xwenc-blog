import client, { previewClient } from "./sanity";

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}

export async function getProfile(preview) {
  const data = await getClient(preview).fetch(
    `*[_type == "profile"] {
      about,
      company,
      focus,
      focus_url,
      for_hire,
      image{asset->{url}},
      location,
      name,
      profession,
      skills[]->{title},
      email,
    }`
  );
  return data[0];
}

export async function getSocial(preview) {
  const data = await getClient(preview).fetch(
    `*[_type == "social"] {
      name,
      url,
    }`
  );
  return data;
}

export async function getProject(preview) {
  const data = await getClient(preview).fetch(
    `*[_type == "project"] | order(_createdAt asc) {
      description, 
      icon,
      image{asset->{url}},
      name,
      status,
      tags[]->{title},
      url,
     }`
  );
  return data;
}


export async function getHistory(preview) {
  const data = await getClient(preview).fetch(
    `*[_type == "history"] | order(_createdAt desc) {
      company,
      from,
      to,
      position,
      url,   
     }`
  );
  return data;
}

