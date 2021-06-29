import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCostumer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEntrepriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCostumer('Lucas', 'Rocha', 'xxx.xxx.xxx-50');
    expect(sut).toHaveProperty('firstName', 'Lucas');
    expect(sut).toHaveProperty('lastName', 'Rocha');
    expect(sut).toHaveProperty('cpf', 'xxx.xxx.xxx-50');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCostumer('Lucas', 'Rocha', 'xxx.xxx.xxx-50');
    expect(sut.getName()).toBe('Lucas Rocha');
    expect(sut.getIDN()).toBe('xxx.xxx.xxx-50');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEntrepriseCustomer('Udemy', 'xxx.xxx');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', 'xxx.xxx');
  });

  it('should have methods to get name and idn for entreprise customers', () => {
    const sut = createEntrepriseCustomer('Udemy', 'xxx.xxx');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('xxx.xxx');
  });
});
