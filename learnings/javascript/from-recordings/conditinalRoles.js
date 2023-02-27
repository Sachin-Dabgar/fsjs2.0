// create an application with following roles
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep  - get access to create/delete tests
// user - get access to consume content

let user = 'someone'

switch(user){
    case 'admin': console.log('gets full access')
    break
    case 'subadmin': console.log('gets access to create/delete courses')
    break
    case 'testprep' : console.log('gets access to create/delete tests')
    break
    case 'user': console.log('gets access to consume content')
    break
    default:
        console.log('not a valid user')
}