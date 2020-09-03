/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompetitorProduct = /* GraphQL */ `
  subscription OnCreateCompetitorProduct {
    onCreateCompetitorProduct {
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
export const onUpdateCompetitorProduct = /* GraphQL */ `
  subscription OnUpdateCompetitorProduct {
    onUpdateCompetitorProduct {
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
export const onDeleteCompetitorProduct = /* GraphQL */ `
  subscription OnDeleteCompetitorProduct {
    onDeleteCompetitorProduct {
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
export const onCreateElementalProduct = /* GraphQL */ `
  subscription OnCreateElementalProduct {
    onCreateElementalProduct {
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
export const onUpdateElementalProduct = /* GraphQL */ `
  subscription OnUpdateElementalProduct {
    onUpdateElementalProduct {
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
export const onDeleteElementalProduct = /* GraphQL */ `
  subscription OnDeleteElementalProduct {
    onDeleteElementalProduct {
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
