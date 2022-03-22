package com.restapi.iamtool.controller;

import com.restapi.iamtool.entities.Offiam;
import com.restapi.iamtool.repository.OffiamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("api/offiam/")
public class OffiamController {

    private OffiamRepository offiamRepository;

    @Autowired
    public OffiamController(OffiamRepository offiamRepository) {
        this.offiamRepository = offiamRepository;
    }

    @GetMapping("all")
    public List<Offiam> getOffiam() {
        return this.offiamRepository.findAll();
    }

    @PostMapping("add")
    public Offiam createOffiam(@RequestBody Offiam offiam ){
        return offiamRepository.save(offiam);
    }

}
