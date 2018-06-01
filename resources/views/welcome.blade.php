<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
                    <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
                    <!-- Import Google Icon Font -->
  
  <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"> -->
  <!-- Import materialize.css -->
  <!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet"> -->

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <link rel="stylesheet" href="css/home.css">
	<!-- Our Custom CSS -->
    </head>
    <body>
    
            
                <div id="example" class="col-lg-12"></div>
                <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script> -->
        <script src="{{asset('js/app.js')}}" ></script>
        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
	<!-- Bootstrap Js CDN -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	<script type="text/javascript">
		$(document).ready(function () {
			$('#sidebarCollapse').on('click', function () {
				$('#sidebar').toggleClass('active');
			});
		});
	</script>
    </body>
</html>