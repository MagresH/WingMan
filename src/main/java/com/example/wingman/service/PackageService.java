package com.example.wingman.service;
import com.example.wingman.model.Package;

public interface PackageService {
    Package createPackage(Package _package);
    boolean validatePackage(Package _package);
}
