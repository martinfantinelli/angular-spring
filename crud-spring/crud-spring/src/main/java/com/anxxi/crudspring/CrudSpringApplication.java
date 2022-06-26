package com.anxxi.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.anxxi.crudspring.model.Manga;
import com.anxxi.crudspring.repository.MangaRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDataBase(MangaRepository mangaRepository) {
		return args -> {
			mangaRepository.deleteAll();

			Manga m = new Manga();
			m.setName("Demon Slayer");
			m.setCategory("Shonen");

			mangaRepository.save(m);
		}; 
	}
}
