export const BookingConstant ={

    ApiEndPOints:{
    
    },
    Patterns:{
  
    },
    menus:[
      {
        path:'Clients',
        text:'Client',
        roles:['Admin']
      },
      {
        path:'Users',
        text:'User',
        roles:['Admin','ClientAdmin']
      },
      {
        path:'Packages',
        text:'Packages',
        roles:['Admin']
      },
      {
        path:'ClientPackages',
        text:'Client-Package',
        roles:['Admin']
      },
      {
        path:'Dashboard',
        text:'Dashboard',
        roles:['Admin','ClientAdmin']
      },
      {
        path:'Rooms',
        text:'Rooms',
        roles:['Clients']
      },
      {
        path:'Booking',
        text:'Booking',
        roles:['Client']
      },
    ]



}