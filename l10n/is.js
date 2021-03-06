OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Eyða",
    "Restrict login to IP addresses" : "Takmarka innskráningu við IP-vistföng",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Gerir kerfisstjórum kleift að takmarka innskráningu á þjóna þeirra við röð IP-vistfanga.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Þetta forrit gerir kerfisstjórum kleift að takmarka innskráningu á\nNextcloud-þjóna þeirra við tiltekin bil IP-vistfanga. Athugaðu að fyrirliggjandi setur\nhaldast opnar.\n\nHægt er að stýra IP-tölusviðum með OCC-skipanalínuviðmótinu\neða myndrænt í stjórnendastillingunum. Ef þú ætlar að nota OCC-tólið, þá\nættu eftirfarandi skipanir að gefa hugmynd um notkun þess.\n\nTil að leyfa `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTil að leyfa `127.0.0.0/24` og einnig `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Takmarka innskráningu við röð IP-vistfanga",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Sjálfgefið leyfir %s innskráningu frá hvaða IP-vistfangi sem er. Til að takmarka innskráningu við tiltekna röð IP-vistfanga, geturðu tilgreint þau hér fyrir neðan.",
    "Add" : "Bæta við",
    "Not authorized" : "Ekki heimilt"
},
"nplurals=2; plural=(n % 10 != 1 || n % 100 == 11);");
