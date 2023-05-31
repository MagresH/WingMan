package com.example.wingman.repository;

import com.example.wingman.model.Package;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackageRepository extends JpaRepository<Package, Long> {
    Package save(Package _package);
}