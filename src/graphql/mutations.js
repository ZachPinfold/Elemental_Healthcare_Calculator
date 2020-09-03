/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompetitorProduct = /* GraphQL */ `
  mutation CreateCompetitorProduct(
    $input: CreateCompetitorProductInput!
    $condition: ModelCompetitorProductConditionInput
  ) {
    createCompetitorProduct(input: $input, condition: $condition) {
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
export const updateCompetitorProduct = /* GraphQL */ `
  mutation UpdateCompetitorProduct(
    $input: UpdateCompetitorProductInput!
    $condition: ModelCompetitorProductConditionInput
  ) {
    updateCompetitorProduct(input: $input, condition: $condition) {
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
export const deleteCompetitorProduct = /* GraphQL */ `
  mutation DeleteCompetitorProduct(
    $input: DeleteCompetitorProductInput!
    $condition: ModelCompetitorProductConditionInput
  ) {
    deleteCompetitorProduct(input: $input, condition: $condition) {
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
export const createElementalProduct = /* GraphQL */ `
  mutation CreateElementalProduct(
    $input: CreateElementalProductInput!
    $condition: ModelElementalProductConditionInput
  ) {
    createElementalProduct(input: $input, condition: $condition) {
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
export const updateElementalProduct = /* GraphQL */ `
  mutation UpdateElementalProduct(
    $input: UpdateElementalProductInput!
    $condition: ModelElementalProductConditionInput
  ) {
    updateElementalProduct(input: $input, condition: $condition) {
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
export const deleteElementalProduct = /* GraphQL */ `
  mutation DeleteElementalProduct(
    $input: DeleteElementalProductInput!
    $condition: ModelElementalProductConditionInput
  ) {
    deleteElementalProduct(input: $input, condition: $condition) {
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
