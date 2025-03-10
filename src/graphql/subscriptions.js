/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateFollow = /* GraphQL */ `
  subscription OnCreateFollow($filter: ModelSubscriptionFollowFilterInput) {
    onCreateFollow(filter: $filter) {
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
export const onUpdateFollow = /* GraphQL */ `
  subscription OnUpdateFollow($filter: ModelSubscriptionFollowFilterInput) {
    onUpdateFollow(filter: $filter) {
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
export const onDeleteFollow = /* GraphQL */ `
  subscription OnDeleteFollow($filter: ModelSubscriptionFollowFilterInput) {
    onDeleteFollow(filter: $filter) {
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
export const onCreateUserSavedPosts = /* GraphQL */ `
  subscription OnCreateUserSavedPosts(
    $filter: ModelSubscriptionUserSavedPostsFilterInput
  ) {
    onCreateUserSavedPosts(filter: $filter) {
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
export const onUpdateUserSavedPosts = /* GraphQL */ `
  subscription OnUpdateUserSavedPosts(
    $filter: ModelSubscriptionUserSavedPostsFilterInput
  ) {
    onUpdateUserSavedPosts(filter: $filter) {
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
export const onDeleteUserSavedPosts = /* GraphQL */ `
  subscription OnDeleteUserSavedPosts(
    $filter: ModelSubscriptionUserSavedPostsFilterInput
  ) {
    onDeleteUserSavedPosts(filter: $filter) {
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
export const onCreateTaggedUsers = /* GraphQL */ `
  subscription OnCreateTaggedUsers(
    $filter: ModelSubscriptionTaggedUsersFilterInput
  ) {
    onCreateTaggedUsers(filter: $filter) {
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
export const onUpdateTaggedUsers = /* GraphQL */ `
  subscription OnUpdateTaggedUsers(
    $filter: ModelSubscriptionTaggedUsersFilterInput
  ) {
    onUpdateTaggedUsers(filter: $filter) {
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
export const onDeleteTaggedUsers = /* GraphQL */ `
  subscription OnDeleteTaggedUsers(
    $filter: ModelSubscriptionTaggedUsersFilterInput
  ) {
    onDeleteTaggedUsers(filter: $filter) {
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
