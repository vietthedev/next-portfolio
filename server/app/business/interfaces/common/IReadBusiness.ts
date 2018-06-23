export default interface IReadBusiness<T> {
  find: (conditions?: any) => Promise<T[]>;
}
