<?php 
    //session_start();
    //function get_data() {
        header('Access-Control-Allow-Origin: * ');
        header('Access-Control-Allow-Methods: GET, OPTIONS, POST, PUT');
        header('Access-Control-Allow-Headers: Content-Type');

        $db = mysqli_connect("james.cedarville.edu", "cs3220", "", "cs3220_Sp22")
            or die ("Error: unable to connect to database");

        // Get user table
        //WHERE u.username = '$username';
        $userQuery = "SELECT username, u.password as 'password', first_name, last_name
                        FROM GJS_user as u";          
                        
        $result = mysqli_query($db, $userQuery)
            or die ("Error: unsuccesful query");

        $users_data = array();
        while($row = mysqli_fetch_assoc($result)) {
            $users_data[] = $row;
            // array(
            //     'username'  =>  $row["username"],
            //     'password'  =>  $row["password"]
            //);
        }

        $output = array();
        $output["users"] = $users_data;

        echo json_encode($output);

        mysqli_close($db);
    //}

    //echo '<pre>';
    //print_r(get_data());
    //echo '<pre>';
    // Combine tables
    // $combined['plan'] = $plan;
    // $combined['catalog'] = $catalog;

    //echo json_encode($users);
    
    //mysqli_close($db);
?>