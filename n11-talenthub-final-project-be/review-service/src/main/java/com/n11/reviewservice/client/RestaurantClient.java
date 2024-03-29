package com.n11.reviewservice.client;


import feign.Response;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * @author Mehmet Akif Tanisik
 */

@FeignClient("restaurant-service/api/v1/restaurants")
public interface RestaurantClient {

    @GetMapping("/{restaurantId}")
    Response getRestaurantById(@PathVariable String restaurantId);
}


