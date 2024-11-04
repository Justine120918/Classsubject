def collect_user_info():
    # Collect user details from input
        name = input("Enter your name: ")
            age = input("Enter your age: ")
                email = input("Enter your email: ")
                    phone_number = input("Enter your phone number: ")
                        
                            # Display the collected information
                                print("\nCollected User Information:")
                                    print(f"Name: {name}")
                                        print(f"Age: {age}")
                                            print(f"Email: {email}")
                                                print(f"Phone Number: {phone_number}")
                                                    
                                                        
                                                            with open("user_info.txt", "a") as file:
                                                                    file.write(f"Name: {name}\n")
                                                                            file.write(f"Age: {age}\n")
                                                                                    file.write(f"Email: {email}\n")
                                                                                            file.write(f"Phone Number: {phone_number}\n")
                                                                                                    file.write("\n")
                                                                                                        
                                                                                                            print("\nUser information saved successfully!")

                                                                                                            # Run the function
                                                                                                            if __name__ == "__main__":
                                                                                                                collect_user_info()
