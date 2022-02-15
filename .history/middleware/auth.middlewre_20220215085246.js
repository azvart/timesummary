export async function middleware(req, res){
    console.log(req.headers.get('x-auth-access'));
}