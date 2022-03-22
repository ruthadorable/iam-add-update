package com.restapi.iamtool.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="CBUS")
public class Cbus {

    //gestion dans IDM
    @Id
    @Column(name="CRESTRA")
    private long crestra ;

    @Column(name="CNIVBUS")
    private long cnivbus;

    @Column(name="CTYPOFF")
    private long ctypoff;

    @Column(name="CGESBUS")
    private long cgesbus;

    @Column(name="UOT")
    private long uot;

    @Column(name="COFFCDDB")
    private long coffcddb;

    @Column(name="COFFBTWTVA")
    private long coffbtwtva;


    public Cbus() {
    }

    public Cbus(long crestra, long cnivbus, long cgesbus, long ctypoff, long uot, long coffcddb, long coffbtwtva) {
        this.crestra = crestra;
        this.cnivbus = cnivbus;
        this.cgesbus= cgesbus;
        this.ctypoff = ctypoff;
        this.uot = uot;
        this.coffcddb = coffcddb;
        this.coffbtwtva = coffbtwtva;
    }

    public long getCgesbus() {
        return cgesbus;
    }

    public void setCgesbus(long cgesbus) {
        this.cgesbus = cgesbus;
    }

    public long getCrestra() {
        return crestra;
    }

    public void setCrestra(long crestra) {
        this.crestra = crestra;
    }

    public long getCnivbus() {
        return cnivbus;
    }

    public void setCnivbus(long cnivbus) {
        this.cnivbus = cnivbus;
    }

    public long getCtypoff() {
        return ctypoff;
    }

    public void setCtypoff(long ctypoff) {
        this.ctypoff = ctypoff;
    }

    public long getUot() {
        return uot;
    }

    public void setUot(long uot) {
        this.uot = uot;
    }

    public long getCoffcddb() {
        return coffcddb;
    }

    public void setCoffcddb(long coffcddb) {
        this.coffcddb = coffcddb;
    }

    public long getCoffbtwtva() {
        return coffbtwtva;
    }

    public void setCoffbtwtva(long coffbtwtva) {
        this.coffbtwtva = coffbtwtva;
    }
}
