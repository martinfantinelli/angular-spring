package com.anxxi.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anxxi.crudspring.model.Manga;
import com.anxxi.crudspring.repository.MangaRepository;

@RestController
@RequestMapping("/api/mangas")
public class MangaController {
    
    private final MangaRepository mangaRepository;

    public MangaController(MangaRepository mangaRepository) {
        this.mangaRepository = mangaRepository;
    }

    @GetMapping
    public List<Manga> mangaList(){
        return mangaRepository.findAll();
    }
}
