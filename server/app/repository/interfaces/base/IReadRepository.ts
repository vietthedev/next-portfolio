export default interface IReadRepository<T> {
  find: (conditions?: any) => Promise<T[]>;
}
