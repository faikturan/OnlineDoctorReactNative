package com.onlinedotor.com.onlinedoctor;

import android.content.Context;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.RecyclerView.ViewHolder;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.squareup.picasso.Picasso;

import java.util.ArrayList;

public class ProviderListAdaptor extends RecyclerView.Adapter<ProviderListAdaptor.ProviderListViewHolder> {


    Context context;
    ArrayList<Provider> providers;

    public ProviderListAdaptor(Context c, ArrayList<Provider> p){
        context = c;
        providers = p;
    }


    @NonNull
    @Override
    public ProviderListViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new ProviderListViewHolder(LayoutInflater.from(context).inflate(R.layout.activity_provider_list_item, parent,false));
    }

    @Override
    public void onBindViewHolder(@NonNull final ProviderListViewHolder holder, final int position) {
        holder.provider_firstname.setText(providers.get(position).getFirstname());
        holder.provider_lastname.setText(providers.get(position).getLastname());
        holder.provider_specialty.setText(providers.get(position).getSpecialty());
        holder.provider_provider.setText(providers.get(position).getProvider());
        Picasso.get().load(providers.get(position).getImage()).into(holder.provider_image);

        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String ClickedProviderFirstname = providers.get(position).getFirstname();
                String ClickedProviderLastname = providers.get(position).getLastname();
                String ClickedProviderBackground1 = providers.get(position).getBackground1();
                String ClickedProviderBackground2 = providers.get(position).getBackground2();
                String ClickedProviderBackground3 = providers.get(position).getBackground3();
                String ClickedProviderTitle = providers.get(position).getTitle();
                String ClickedProviderSpecialty = providers.get(position).getSpecialty();
                String ClickedProviderProvider = providers.get(position).getProvider();
                String ClickedProviderAddress1 = providers.get(position).getAddress1();
                String ClickedProviderAddress2 = providers.get(position).getAddress2();
                String ClickedProviderCity = providers.get(position).getCity();
                String ClickedProviderState = providers.get(position).getCity();
                String ClickedProviderZipcode = providers.get(position).getZipcode();
                String ClickedProviderPhone = providers.get(position).getPhone();
                String ClickedProviderEmail = providers.get(position).getEmail();
                String ClickedProviderImage = providers.get(position).getImage();
                String ClickedProviderLanguage = providers.get(position).getLanguage();
                Intent intent = new Intent(view.getContext(), ProviderDetailActivity.class);
                intent.putExtra("ClickedProviderFN", ClickedProviderFirstname);
                intent.putExtra("ClickedProviderLN", ClickedProviderLastname);

                intent.putExtra("ClickedProviderBG1", ClickedProviderBackground1);
                intent.putExtra("ClickedProviderBG2", ClickedProviderBackground2);
                intent.putExtra("ClickedProviderBG3", ClickedProviderBackground3);
                intent.putExtra("ClickedProviderTI", ClickedProviderTitle);
                intent.putExtra("ClickedProviderSP", ClickedProviderSpecialty);
                intent.putExtra("ClickedProviderPV", ClickedProviderProvider);
                intent.putExtra("ClickedProviderAD1", ClickedProviderAddress1);
                intent.putExtra("ClickedProviderAD2", ClickedProviderAddress2);
                intent.putExtra("ClickedProviderCT", ClickedProviderCity);
                intent.putExtra("ClickedProviderST", ClickedProviderState);
                intent.putExtra("ClickedProviderZC", ClickedProviderZipcode);
                intent.putExtra("ClickedProviderPH", ClickedProviderPhone);
                intent.putExtra("ClickedProviderEM", ClickedProviderEmail);
                intent.putExtra("ClickedProviderIM", ClickedProviderImage);
                intent.putExtra("ClickedProviderLG", ClickedProviderLanguage);
                view.getContext().startActivity(intent);
            }
        });
    }

    @Override
    public int getItemCount() {
        return providers.size();
    }

    class ProviderListViewHolder extends RecyclerView.ViewHolder{
        TextView provider_firstname, provider_lastname, provider_specialty, provider_provider;
        ImageView provider_image;

        public ProviderListViewHolder(View itemView){
            super(itemView);
            provider_firstname = (TextView) itemView.findViewById(R.id.provider_firstname);
            provider_lastname = (TextView) itemView.findViewById(R.id.provider_lastname);
            provider_specialty = (TextView) itemView.findViewById(R.id.provider_specialty);
            provider_provider = (TextView) itemView.findViewById(R.id.provider_provider);
            provider_image = (ImageView) itemView.findViewById(R.id.provider_image);
        }


//        public void onClick(final int position)
//        {
//            btn.setOnClickListener(new View.OnClickListener() {
//                @Override
//                public void onClick(View v) {
//                    Toast.makeText(context, position+" is clicked", Toast.LENGTH_SHORT).show();
//                }
//            });
//        }
    }
}
