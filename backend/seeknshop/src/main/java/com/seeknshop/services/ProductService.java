package com.seeknshop.services;

import com.seeknshop.dao.ProductDAO;
import com.seeknshop.dto.ProductDTO;
import com.seeknshop.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductDAO productDAO;

    public ProductDTO getProductById(Long id) {
        return convertToDTO(productDAO.getProductById(id));
    }

    public List<ProductDTO> getAllProducts(String search) {
        System.out.println(search);
        List<Product> products = productDAO.getAllProducts(search);
        return products.stream()
                .map(this::convertToDTO)
                .toList();
    }

    private ProductDTO convertToDTO(Product product) {
        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setDescription(product.getDescription());
        dto.setPrice(product.getPrice());
        dto.setBrand(product.getBrand());
        dto.setCategory(product.getCategory().toString());
        dto.setImageUrl(product.getImageUrl());
        return dto;
    }
}
