/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createFollow = /* GraphQL */ `
  mutation CreateFollow(
    $input: CreateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    createFollow(input: $input, condition: $condition) {
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
export const updateFollow = /* GraphQL */ `
  mutation UpdateFollow(
    $input: UpdateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    updateFollow(input: $input, condition: $condition) {
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
export const deleteFollow = /* GraphQL */ `
  mutation DeleteFollow(
    $input: DeleteFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    deleteFollow(input: $input, condition: $condition) {
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
export const createUserSavedPosts = /* GraphQL */ `
  mutation CreateUserSavedPosts(
    $input: CreateUserSavedPostsInput!
    $condition: ModelUserSavedPostsConditionInput
  ) {
    createUserSavedPosts(input: $input, condition: $condition) {
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
export const updateUserSavedPosts = /* GraphQL */ `
  mutation UpdateUserSavedPosts(
    $input: UpdateUserSavedPostsInput!
    $condition: ModelUserSavedPostsConditionInput
  ) {
    updateUserSavedPosts(input: $input, condition: $condition) {
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
export const deleteUserSavedPosts = /* GraphQL */ `
  mutation DeleteUserSavedPosts(
    $input: DeleteUserSavedPostsInput!
    $condition: ModelUserSavedPostsConditionInput
  ) {
    deleteUserSavedPosts(input: $input, condition: $condition) {
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
export const createTaggedUsers = /* GraphQL */ `
  mutation CreateTaggedUsers(
    $input: CreateTaggedUsersInput!
    $condition: ModelTaggedUsersConditionInput
  ) {
    createTaggedUsers(input: $input, condition: $condition) {
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
export const updateTaggedUsers = /* GraphQL */ `
  mutation UpdateTaggedUsers(
    $input: UpdateTaggedUsersInput!
    $condition: ModelTaggedUsersConditionInput
  ) {
    updateTaggedUsers(input: $input, condition: $condition) {
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
export const deleteTaggedUsers = /* GraphQL */ `
  mutation DeleteTaggedUsers(
    $input: DeleteTaggedUsersInput!
    $condition: ModelTaggedUsersConditionInput
  ) {
    deleteTaggedUsers(input: $input, condition: $condition) {
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
