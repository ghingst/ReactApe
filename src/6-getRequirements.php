<?php 
    //session_start();
    header('Access-Control-Allow-Origin: * ');
    header('Access-Control-Allow-Methods: GET, OPTIONS, POST, PUT');
    header('Access-Control-Allow-Headers: Content-Type');

    $db = mysqli_connect("james.cedarville.edu", "cs3220", "", "cs3220_Sp22")
        or die ("Error: unable to connect to database");
        
    // Get the inputted username
    $username = $_GET["username"];

    // Get plan table
    $requirementsQuery = "  SELECT u.username, ca.name as 'category', caCo.course_id, co.name
                            FROM (((GJS_user as u
                                LEFT JOIN GJS_requirement as r
                                on (u.major_id = r.major_id
                                    AND u.catalog_id = r.catalog_id))
                                    LEFT JOIN GJS_category as ca
                                    on r.id = ca.requirement_id)
                                        LEFT JOIN GJS_category_course as caCo
                                        on ca.id = caCo.category_id)
                                            LEFT JOIN GJS_course as co
                                            on caCo.course_id = co.id
                            WHERE u.username = '$username'
                            GROUP BY u.username, ca.name, caCo.course_id, co.name";
    $requirementsResult = mysqli_query($db, $requirementsQuery)
        or die ("Error: unsuccesful query");

    $requirements = array();
    while($row = mysqli_fetch_assoc($requirementsResult)) {
        $requirements[] = $row;
    }

    echo json_encode($requirements);
    
    mysqli_close($db);
?>
