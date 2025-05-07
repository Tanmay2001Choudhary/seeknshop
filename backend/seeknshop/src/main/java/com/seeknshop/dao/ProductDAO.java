package com.seeknshop.dao;

import com.seeknshop.entity.Product;
import com.seeknshop.exception.ProductNotFoundException;
import com.seeknshop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductDAO {

    @Autowired
    ProductRepository productRepository;

    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with ID: " + id));
    }

    public List<Product> getAllProducts(String searchTerm) {
        if (searchTerm != null && !searchTerm.isEmpty()) {
            return productRepository.findByNameOrBrandContainingIgnoreCase(searchTerm);
        }
        return productRepository.findAll();
    }
}
