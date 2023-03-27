// Created by: Jaden Plugowsky
// Created on: March 2023
//
// This program finds the area of a triangle

package main

import "fmt"

func main() {
	// This function finds the area of a triangle
	var base int
	var height int
	var area int

	// Input
	fmt.Println("\nThis program finds the area of a triangle with given values.")
	fmt.Println()
	fmt.Print("Enter the Base's value (cm): ")
	fmt.Scanln(&base)
	fmt.Print("Enter the Height value (cm): ")
	fmt.Scanln(&height)

	// Process
	area = (base * height) / 2

	// Output
	fmt.Println()
	fmt.Println("The area of the triangle is:", area, "cm².")

	fmt.Println("\nDone.")
}
