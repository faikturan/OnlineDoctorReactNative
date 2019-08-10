package com.onlinedotor.com.onlinedoctor;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
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
        specialty = recdData.getString("ClickedProviderSpecialty");
        background1 = recdData.getString("ClickedProviderBG1");
        background2 = recdData.getString("ClickedProviderBG2");
        background3 = recdData.getString("ClickedProviderBG3");
        image = recdData.getString("ClickedProviderIM");
        fullname = title + " " + firstname + " " + lastname;
        background = background1 + "\n" + background2 + "\n" + background3;


        TextView full_name = (TextView) findViewById(R.id.provider_fullname);
        TextView lang_uage = (TextView) findViewById(R.id.provider_language);
        TextView pro_vider = (TextView) findViewById(R.id.provider_provider);
        TextView speci_alty = (TextView) findViewById(R.id.provider_specialty);
        TextView back_ground = (TextView) findViewById(R.id.provider_background);
        ImageView imageView = (ImageView) findViewById(R.id.provider_image);


        full_name.setText(fullname);
        lang_uage.setText(language);
        pro_vider.setText(provider);
        speci_alty.setText(specialty);
        back_ground.setText(background);
        Picasso.get().load(image).into(imageView);
    }
}
