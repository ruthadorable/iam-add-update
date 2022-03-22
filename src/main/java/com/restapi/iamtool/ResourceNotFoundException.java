package com.restapi.iamtool;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends Exception{
    public ResourceNotFoundException()
    {
        super();
    }
    public ResourceNotFoundException(String error) {
        super(error);
    }
}
