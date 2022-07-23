def freeway_game(dist_km_to_exit, my_speed_kph, other_cars):
    # Your code here!
    print(dist_km_to_exit, my_speed_kph, other_cars)
    count = 0
    my_time_to_exit = dist_km_to_exit/my_speed_kph
    print(f"my time to exit {my_time_to_exit}")
    
    for car in other_cars:
        opp_dist_km_to_exit = dist_km_to_exit + car[0]*car[1]/60
        opp_time_to_exit = opp_dist_km_to_exit/car[1]
        print(opp_time_to_exit)
        if opp_time_to_exit < my_time_to_exit and car[0] > 0:
            count -= 1
        elif opp_time_to_exit > my_time_to_exit and car[0] < 0:
            count += 1
    return count