# SmartIS job interview siple REST api

Simple api to manipulate helicopter records.

## Api

### JSON Schema
```JSON
{
    "name:" "someName", // Required
    "reserved:" true    // Not required, defaults to false
}    
```

### Endpoints

- GET, POST `http://localhost:8080/helicopters`
- GET, PUT, DELETE `http://localhost:8080/helicopters/:id`

### How to run

Run `docker-compose up -d`

