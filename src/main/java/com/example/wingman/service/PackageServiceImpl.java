package com.example.wingman.service;

import com.example.wingman.repository.PackageRepository;
import lombok.RequiredArgsConstructor;
import com.example.wingman.model.Package;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PackageServiceImpl implements PackageService {

    private final PackageRepository packageRepository;

    @Override

    public Package createPackage(Package _package) {

        if (!validatePackage(_package)) {
            throw new IllegalArgumentException("Invalid package details");
        }

        return packageRepository.save(_package);
    }

    @Override
    public boolean validatePackage(Package _package) {
        return true;
    }
}
