# nodejs-angular-car-rental

### Index
1. Project Description [link](#project-description)
1. Project Setup [link](#project-setup)
1. Refs [link](#refs)


### Project Description

This project is based on microservice architecture.
The microservice services which are used in project
1. User Service
1. Rental Service
1. Billing Service
1. Notification Service

### Project Setup

**Download and install**
1. Node v18.18.2    
1. mongodb      
1. mysqldb    
1. vscode or _preferable editor_

##### User Service
```
go to /user-service
create db cr_user_db in mongodb
update db endpoint in app.js
> npm i
> npm run start
```

##### Rental Service
```
go to /rental-service
create db cr_rental_db in mysql
update db endpoint in app.js
> npm i
> npm run start
```

### Refs
<a name="description"></a> 
- API Documentation [Swaggerhub link](https://app.swaggerhub.com/apis/officialbhaskar/car_rental_service/1.0.0)

