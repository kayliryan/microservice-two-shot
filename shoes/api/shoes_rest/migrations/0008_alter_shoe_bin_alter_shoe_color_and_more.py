# Generated by Django 4.0.3 on 2022-07-28 01:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0007_alter_shoe_bin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoe',
            name='bin',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='shoes', to='shoes_rest.binvo'),
        ),
        migrations.AlterField(
            model_name='shoe',
            name='color',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='shoe',
            name='manufacturer',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='shoe',
            name='model_name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='shoe',
            name='picture_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]