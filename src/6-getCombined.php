<?php 
    //session_start();
    header('Access-Control-Allow-Origin: * ');
    header('Access-Control-Allow-Methods: GET, OPTIONS, POST, PUT');
    header('Access-Control-Allow-Headers: Content-Type');


    $db = mysqli_connect("james.cedarville.edu", "cs3220", "", "cs3220_Sp22")
        or die ("Error: unable to connect to database");

    // Get the inputted username
    $username = $_GET['username'];

    // Get plan table
    $planQuery = "SELECT u.username, p.name as 'plan_name', m.name as 'major', c.year as 'catalog_year', pc.semester as 'term', pc.year, pc.course_id
                    FROM (((GJS_user as u
                        LEFT JOIN GJS_plan as p
                        on u.id = p.user_id)
                            LEFT JOIN GJS_major as m
                            on u.major_id = m.id)
                                LEFT JOIN GJS_catalog as c
                                on u.catalog_id = c.id)
                                    LEFT JOIN GJS_plan_course as pc
                                    on p.id = pc.plan_id
                    WHERE u.username = '$username'";
    $planResult = mysqli_query($db, $planQuery)
        or die ("Error: unsuccesful query");

    $combined = array();
    $plan = array();
    while($row = mysqli_fetch_assoc($planResult)) {
        $plan[] = $row;
    }

    // Get catalog table
    $catalogQuery = "SELECT ca.year, caCo.course_id, co.name, co.description, co.credits
                        FROM ((GJS_user as u
                            LEFT JOIN GJS_catalog as ca
                            on u.catalog_id = ca.id)
                                LEFT JOIN GJS_catalog_course as caCo
                                on ca.id = caCo.catalog_id)
                                    LEFT JOIN GJS_course as co
                                    on caCo.course_id = co.id
                        WHERE u.username = '$username'";
    $catalogResult = mysqli_query($db, $catalogQuery)
        or die ("Error: unsuccesful query");

    $catalog = array();
    while($row = mysqli_fetch_assoc($catalogResult)) {
        $catalog[] = $row;
    }

    // Combine tables
    $combined['plan'] = $plan;
    $combined['catalog'] = $catalog;

    echo json_encode($combined);
    
    mysqli_close($db);
?>
