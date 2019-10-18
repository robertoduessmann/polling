<head>
  <title>DecideJa</title>
  <link rel="shortcut icon" type="image/png" sizes="16x16 32x32" href="/favicon.png">
</head>

<body>
    <div class="container">        
        <header>
            <span class="head">DecideJa</span>
            <span class="glyphicon glyphicon-ok-circle btn-lg" aria-hidden="true"></span>
            <hr>
        </header>

        <div class="content">          
            <div id="new-poll" class="container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        {{ >pollForm }}
                    </div>
                </div>
            </div>            
            <div class="polls">
                {{ #each findOne }}
                    {{ >poll }}
                {{ /each }}
            </div>
            <br><br><br><br><br>
        </div>

        <footer>
            <div class="footer">
                <hr>
                © <?php echo date("Y"); ?>
            </div>  
        </footer>   
     </div>
</body>
