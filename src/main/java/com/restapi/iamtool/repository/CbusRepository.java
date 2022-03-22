package com.restapi.iamtool.repository;

import com.restapi.iamtool.entities.Cbus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CbusRepository extends JpaRepository<Cbus,Long>{
    /*@Query("SELECT c from Cbus c WHERE c.crestra LIKE %?1%")
    public List<Cbus> findAll(Long keyword);*/
}
