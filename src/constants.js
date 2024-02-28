export const backEndUrls = {
    'production':'http://ec2-54-252-195-7.ap-southeast-2.compute.amazonaws.com:3000/api/v1/',
    'development': 'http://localhost:3000/api/v1/'
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