/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      username
      phone
      uniqueId
      gender
      avatar
      bio
      website
      followers {
        nextToken
        __typename
      }
      followings {
        nextToken
        __typename
      }
      posts {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      savedPost {
        nextToken
        __typename
      }
      taggedPost {
        nextToken
        __typename
      }
      isPrivate
      likes {
        nextToken
        __typename
      }
      follow {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userFollowersId
      userFollowingsId
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        isPrivate
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      description
      owner {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        isPrivate
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
        __typename
      }
      comments {
        nextToken
        __typename
      }
      image
      tags {
        nextToken
        __typename
      }
      savedBy {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPostsId
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      user {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        isPrivate
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
        __typename
      }
      post {
        id
        title
        description
        image
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      createdAt
      updatedAt
      userLikesId
      postLikesId
      __typename
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        userLikesId
        postLikesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        description
        image
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      user {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        isPrivate
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
        __typename
      }
      content
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        userCommentsId
        postCommentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFollow = /* GraphQL */ `
  query GetFollow($id: ID!) {
    getFollow(id: $id) {
      id
      star {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        isPrivate
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
        __typename
      }
      admirer {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        isPrivate
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
        __typename
      }
      starId
      admirerId
      createdAt
      updatedAt
      userFollowId
      __typename
    }
  }
`;
export const listFollows = /* GraphQL */ `
  query ListFollows(
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        starId
        admirerId
        createdAt
        updatedAt
        userFollowId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserSavedPosts = /* GraphQL */ `
  query GetUserSavedPosts($id: ID!) {
    getUserSavedPosts(id: $id) {
      id
      userId
      postId
      user {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        isPrivate
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
        __typename
      }
      post {
        id
        title
        description
        image
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserSavedPosts = /* GraphQL */ `
  query ListUserSavedPosts(
    $filter: ModelUserSavedPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSavedPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        postId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTaggedUsers = /* GraphQL */ `
  query GetTaggedUsers($id: ID!) {
    getTaggedUsers(id: $id) {
      id
      userId
      postId
      user {
        id
        name
        username
        phone
        uniqueId
        gender
        avatar
        bio
        website
        isPrivate
        createdAt
        updatedAt
        userFollowersId
        userFollowingsId
        __typename
      }
      post {
        id
        title
        description
        image
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTaggedUsers = /* GraphQL */ `
  query ListTaggedUsers(
    $filter: ModelTaggedUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaggedUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        postId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userSavedPostsByUserId = /* GraphQL */ `
  query UserSavedPostsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserSavedPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userSavedPostsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        postId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userSavedPostsByPostId = /* GraphQL */ `
  query UserSavedPostsByPostId(
    $postId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserSavedPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userSavedPostsByPostId(
      postId: $postId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        postId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const taggedUsersByUserId = /* GraphQL */ `
  query TaggedUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaggedUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taggedUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        postId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const taggedUsersByPostId = /* GraphQL */ `
  query TaggedUsersByPostId(
    $postId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaggedUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taggedUsersByPostId(
      postId: $postId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        postId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
