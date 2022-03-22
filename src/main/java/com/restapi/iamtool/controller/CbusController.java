package com.restapi.iamtool.controller;

import com.restapi.iamtool.ResourceNotFoundException;
import com.restapi.iamtool.entities.Cbus;
import com.restapi.iamtool.repository.CbusRepository;
import com.restapi.iamtool.service.CbusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin",origins="http://localhost:4200")
@RestController
@RequestMapping("/api/cbus")
public class CbusController {

    private CbusRepository cbusRepository;
    private CbusService cbusService;
    Logger LOGGER = LoggerFactory.getLogger(CbusController.class);
    @Autowired
    public CbusController(CbusRepository cbusRepository) {
        this.cbusRepository = cbusRepository;
    }

    @GetMapping("/getAll")
    public List<Cbus> getCbus() {
        LOGGER.info("Get CBUS list");

        /*Optional<List<Cbus>> optionalList= Optional.ofNullable(cbusRepository.getSourceApps());
        if(optionalList.isPresent())
        {
            return (ResponseEntity<List<Cbus>>) cbusService.getCbus();
        }else{
            return new ResponseEntity<Cbus>(null, HttpStatus.NOT_FOUND);
        }*/


        return this.cbusRepository.findAll();
    }

    @PostMapping("/add")
    public Cbus addCbus(@RequestBody Cbus cbus) {
        LOGGER.info("Create CBUS ");

        return cbusRepository.save(cbus);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cbus> getCbusById(@PathVariable(value = "id") long id) throws ResourceNotFoundException {
        LOGGER.info("Get Cbus by id");
        Cbus cbus = cbusRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Cbus not found"));
        return ResponseEntity.ok().body(cbus);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Cbus> updateCbus(@PathVariable(value="id")long id, @RequestBody Cbus cbusbody) throws ResourceNotFoundException {
        LOGGER.info("Update Cbus by id");
        Cbus cbus=cbusRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Cbus not found"));
        cbus.setCoffbtwtva(cbusbody.getCoffbtwtva());
        cbus.setCoffcddb(cbusbody.getCoffcddb());
        final Cbus updatedCbus=cbusRepository.save(cbus);
        ResponseEntity<Cbus> ok = ResponseEntity.ok(updatedCbus);
        return ok;
    }
    @DeleteMapping("/delete/{id}")
    public Map<String,Boolean> deleteCbus(@PathVariable(value="id") long id)throws ResourceNotFoundException{
        LOGGER.info("Delete Cbus by id");
        Cbus cbus=cbusRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Cbus not found"));
        cbusRepository.delete(cbus);
        Map<String,Boolean> response=new HashMap<>();
        return response;
    }

}
