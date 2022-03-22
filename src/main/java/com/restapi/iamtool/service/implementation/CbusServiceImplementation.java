package com.restapi.iamtool.service.implementation;

import com.restapi.iamtool.entities.Cbus;
import com.restapi.iamtool.repository.CbusRepository;
import com.restapi.iamtool.service.CbusService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class CbusServiceImplementation implements CbusService {
    
   private CbusRepository repository;
    
    @Autowired
    public CbusServiceImplementation( CbusRepository repository)
    {
        this.repository=repository;
    }



    Optional <List <Cbus>>getCbusAll(){
        /*Optional<List<Cbus>> optionalList= Optional.ofNullable(cbusRepository.getSourceApps());
        if(optionalList.isPresent())
        {
            return (ResponseEntity<List<Cbus>>) cbusService.getCbus();
        }else{
            return new ResponseEntity<Cbus>(null, HttpStatus.NOT_FOUND);
        }*/


       /* return this.cbusRepository.findAll();*/



       List<Cbus> list=repository.findAll();
        return Optional.of(list);
    }
    Optional<Cbus> getCbusById(long id){
        Cbus cbusById= repository.getById(id);
        return Optional.of(cbusById);
    }
    /*@Override
    public Cbus createCbus(Cbus Cbus){
        return repository.save(Cbus);
    }

    @Override
    public Optional<Cbus> getCbusById(Long id) {
        return repository.findById(id);
    }

    public List<Cbus> getCbuss()
    {
        return repository.findAll();
    }*/

}
