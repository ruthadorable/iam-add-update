package com.restapi.iamtool.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="OFFIAM")
public class Offiam {
    //gérer via IAM user
    @Id
    @Column(name="CRESTRA")
    private long crestra;
    @Column(name="NAME_NL")
    private String name_nl;
    @Column(name="NAME_FR")
    private String name_fr;
    @Column(name="NAME_DE")
    private String name_de;
    @Column(name="MANAGER")
    private String manager;
    @Column(name="PARENT")
    private String parent;
    @Column(name="ADDR_FR")
    private String addr_fr;
    @Column(name="ADDR_NL")
    private String addr_nl;
    @Column(name="ADDR_DE")
    private String addr_de;
    @Column(name="POSTCODE")
    private int postcode;
    @Column(name="TOWN_FR")
    private String town_fr;
    @Column(name="TOWN_NL")
    private String town_nl;
    @Column(name="TOWN_DE")
    private String town_de;
    @Column(name="CTYPEOFF")
    private long ctypeoff;
    @Column(name="COFFCDDB")
    private long coffcddb;
    @Column(name="COFFBTWTVA")
    private long coffbtwtva;
    @Column(name="FINOFFICEKEY1")
    private long finofficekey1;
    @Column(name="FK_FINOFFICEKEY3")
    private long fk_finofficekey3;


    public Offiam(long crestra, String name_nl, String name_fr, String name_de, String manager, String parent, String addr_fr, String addr_nl, String addr_de, int postcode, String town_fr, String town_nl, String town_de, long ctypeoff, long coffcddb, long coffbtwtva, long finofficekey1, long fk_finofficekey3) {
        this.crestra = crestra;
        this.name_nl = name_nl;
        this.name_fr = name_fr;
        this.name_de = name_de;
        this.manager = manager;
        this.parent = parent;
        this.addr_fr = addr_fr;
        this.addr_nl = addr_nl;
        this.addr_de = addr_de;
        this.postcode = postcode;
        this.town_fr = town_fr;
        this.town_nl = town_nl;
        this.town_de = town_de;
        this.ctypeoff = ctypeoff;
        this.coffcddb = coffcddb;
        this.coffbtwtva = coffbtwtva;
        this.finofficekey1 = finofficekey1;
        this.fk_finofficekey3 = fk_finofficekey3;
    }

    public Offiam(long crestra, long coffbtwtva, long coffcddb) {
        this.crestra = crestra;
        this.coffbtwtva = coffbtwtva;
        this.coffcddb = coffcddb;

    }

    public long getCrestra() {
        return crestra;
    }

    public void setCrestra(long crestra) {
        this.crestra = crestra;
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

    public String getName_nl() {
        return name_nl;
    }

    public void setName_nl(String name_nl) {
        this.name_nl = name_nl;
    }

    public String getName_fr() {
        return name_fr;
    }

    public void setName_fr(String name_fr) {
        this.name_fr = name_fr;
    }

    public String getName_de() {
        return name_de;
    }

    public void setName_de(String name_de) {
        this.name_de = name_de;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getParent() {
        return parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
    }

    public String getAddr_fr() {
        return addr_fr;
    }

    public void setAddr_fr(String addr_fr) {
        this.addr_fr = addr_fr;
    }

    public String getAddr_nl() {
        return addr_nl;
    }

    public void setAddr_nl(String addr_nl) {
        this.addr_nl = addr_nl;
    }

    public String getAddr_de() {
        return addr_de;
    }

    public void setAddr_de(String addr_de) {
        this.addr_de = addr_de;
    }

    public int getPostcode() {
        return postcode;
    }

    public void setPostcode(int postcode) {
        this.postcode = postcode;
    }

    public String getTown_fr() {
        return town_fr;
    }

    public void setTown_fr(String town_fr) {
        this.town_fr = town_fr;
    }

    public String getTown_nl() {
        return town_nl;
    }

    public void setTown_nl(String town_nl) {
        this.town_nl = town_nl;
    }

    public String getTown_de() {
        return town_de;
    }

    public void setTown_de(String town_de) {
        this.town_de = town_de;
    }

    public long getCtypeoff() {
        return ctypeoff;
    }

    public void setCtypeoff(long ctypeoff) {
        this.ctypeoff = ctypeoff;
    }

    public long getFinofficekey1() {
        return finofficekey1;
    }

    public void setFinofficekey1(long finofficekey1) {
        this.finofficekey1 = finofficekey1;
    }

    public long getFk_finofficekey3() {
        return fk_finofficekey3;
    }

    public void setFk_finofficekey3(long fk_finofficekey3) {
        this.fk_finofficekey3 = fk_finofficekey3;
    }
}
