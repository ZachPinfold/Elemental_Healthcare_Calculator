/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompetitorProduct = /* GraphQL */ `
  query GetCompetitorProduct($id: ID!) {
    getCompetitorProduct(id: $id) {
      id
      productName
      competitorName
      cost
      imageURL
      description
      environmentalImpact
      createdAt
      updatedAt
    }
  }
`;
export const listCompetitorProducts = /* GraphQL */ `
  query ListCompetitorProducts(
    $filter: ModelCompetitorProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompetitorProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productName
        competitorName
        cost
        imageURL
        description
        environmentalImpact
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getElementalProduct = /* GraphQL */ `
  query GetElementalProduct($id: ID!) {
    getElementalProduct(id: $id) {
      id
      productName
      cost
      imageURL
      description
      environmentalImpact
      marketArea
      competitors {
        items {
          id
          productName
          competitorName
          cost
          imageURL
          description
          environmentalImpact
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listElementalProducts = /* GraphQL */ `
  query ListElementalProducts(
    $filter: ModelElementalProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listElementalProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productName
        cost
        imageURL
        description
        environmentalImpact
        marketArea
        competitors {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
