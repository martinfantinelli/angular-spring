package com.anxxi.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.RepositoryDefinition;
import org.springframework.stereotype.Repository;

import com.anxxi.crudspring.model.Manga;

@Repository
public interface MangaRepository extends JpaRepository<Manga, Long> { 
    
} 
