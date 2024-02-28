
export const backEndUrls = {
    'development':'http://localhost:3000/api/v1/',
    'production':'http://ec2-3-25-162-142.ap-southeast-2.compute.amazonaws.com:3000'
}
export const userRoutes = {
'module':'user',
'endpoint':{
    'UserDetails':'/userDetails',
    'Login':'/login',
    'SignUp':'/signup',
    'Bulk':'/bulk'
}
}

export const accountRoutes = {
    'module':'account',
    'endpoint':{
        'Transfer':'/transfer',
        'Balance':'/balance'
    }
}