OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Eliminar",
    "Restrict login to IP addresses" : "Restringir el inicio de sesión a direcciones IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Permite que los administradores restrinjan el registro a su instancia en rangos específicos de IP.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphical using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Esta app permite que los administradores restrinjan el registro a su servidor Nextcloud a rangos específicos de IP. Nótese que las sesiones existentes seguirán abiertas.\n\nLos rangos de IP permitidas se pueden administrar usando la interfaz de línea de comandos OCC, los\nsiguientes comandos serían aplicables.\n\nPara añadir a la lista blanca '127.0.0.0/24':\n\n- 'occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24'",
    "Restrict login to IP ranges" : "Restringir el inicio de sesión a rangos de direcciones IP",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Por defecto, %s permite el inicio de sesión desde cualquier dirección IP. Para limitar los inicios de sesión a rangos de IP específicos, puede especificarlos a continuación.",
    "Add" : "Añadir",
    "Not authorized" : "No autorizado"
},
"nplurals=2; plural=(n != 1);");
