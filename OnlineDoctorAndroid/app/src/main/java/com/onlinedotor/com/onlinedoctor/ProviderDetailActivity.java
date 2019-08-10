package com.onlinedotor.com.onlinedoctor;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

public class ProviderDetailActivity extends AppCompatActivity {

    private String firstname;
    private String lastname;
    private String fullname;
    private String title;
    private String language;
    private String provider;
    private String specialty;
    private String background;
    private String background1;
    private String background2;
    private String background3;
    private String image;
    private String languages;
    private String providers;
    private String specialtys;


    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_provider_detail);

        Bundle recdData = getIntent().getExtras();
        firstname = recdData.getString("ClickedProviderFN");
        lastname = recdData.getString("ClickedProviderLN");
        title = recdData.getString("ClickedProviderTI");
        language = recdData.getString("ClickedProviderLG");
        provider = recdData.getString("ClickedProviderPV");
        specialty = recdData.getString("ClickedProviderSP");
        background1 = recdData.getString("ClickedProviderBG1");
        background2 = recdData.getString("ClickedProviderBG2");
        background3 = recdData.getString("ClickedProviderBG3");
        image = recdData.getString("ClickedProviderIM");
        fullname = title + " " + firstname + " " + lastname;
        background = background1 + "\n" + background2 + "\n" + background3;
        languages = "Language: " + language;
        providers = "Provider: " + provider;
        specialtys = "Specialty: " + specialty;

        TextView full_name = (TextView) findViewById(R.id.provider_fullname);
        TextView lang_uage = (TextView) findViewById(R.id.provider_language);
        TextView pro_vider = (TextView) findViewById(R.id.provider_provider);
        TextView speci_alty = (TextView) findViewById(R.id.provider_specialty);
        TextView back_ground = (TextView) findViewById(R.id.provider_background);
        ImageView imageView = (ImageView) findViewById(R.id.provider_image);
        Button btn_toTimeSlot = (Button) findViewById(R.id.btn_toTimeSlot);


        full_name.setText(fullname);
        lang_uage.setText(languages);
        pro_vider.setText(providers);
        speci_alty.setText(specialtys);
        back_ground.setText(background);
        Picasso.get().load(image).into(imageView);

        btn_toTimeSlot.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String provider_firstname = firstname;
                String provider_lastname = lastname;
                Intent intent = new Intent(ProviderDetailActivity.this, ProviderTimeSlotActivity.class);
                intent.putExtra("Provider_Firstname", provider_firstname);
                intent.putExtra("Provider_Lastname", provider_lastname);
                startActivity(intent);
            }
        });
    }
}
