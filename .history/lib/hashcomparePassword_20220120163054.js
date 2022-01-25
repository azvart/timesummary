import {compare, hash} from 'bcryptjs';
import compare from 'bcryptjs';


export async function Compare(password, dbPassword){
  if(!password || !dbPassword){
    return 'Please enter the password';
  }
  const validPassword = await compare(password,dbPassword);
  if(!validPassword){
    return 'Invalid password';
  }
  return true;
};

export async function Hash(password){
  const salt = 12;
  if(!password){
    return 'Please enter the password';
  }

  return await hash(password, salt);
}