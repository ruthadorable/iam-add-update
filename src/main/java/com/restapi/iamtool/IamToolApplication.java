package com.restapi.iamtool;

import com.restapi.iamtool.entities.Cbus;
import com.restapi.iamtool.entities.Offiam;
import com.restapi.iamtool.repository.CbusRepository;
import com.restapi.iamtool.repository.OffiamRepository;
import net.bytebuddy.utility.RandomString;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Random;

@SpringBootApplication
public class IamToolApplication {
    OffiamRepository offiamRepository;
	CbusRepository cbusRepository;

	public static void main(String[] args) {
		SpringApplication.run(IamToolApplication.class, args);
	}

	public void run(String [] args)
	{


		//Création des 7 lignes de données dans CBUS
		Random rnd= new Random();
		for(int i=0;i<7;i++)
		{cbusRepository.save(
				new Cbus(rnd.nextInt(60000),rnd.nextInt(60000),rnd.nextInt(60000),rnd.nextInt(60000),rnd.nextInt(60000),rnd.nextInt(60000),rnd.nextInt(60000)));
		}
		
	}

}
