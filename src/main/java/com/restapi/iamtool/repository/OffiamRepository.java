package com.restapi.iamtool.repository;

import com.restapi.iamtool.entities.Offiam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OffiamRepository extends JpaRepository<Offiam,Long> {

}
