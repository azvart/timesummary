export interface IHeader{
  data?:{},
  color?:IHeaderColor,
  className?:string,
  logoImage?:string,
}

type IHeaderColor = 'primary' | 'dark' | 'light';