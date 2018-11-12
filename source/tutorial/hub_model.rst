Build a model in scaks-Hub
--------------------------

In this section, we introduce how to build a micro-kinetic model in
scaks-Hub. All information needed for model construction are input in
model panel of scaks-Hub. There are two main sub-panel in model panel:

1. Reaction Definition panel: input reaction and energy information
2. Kinetic Model Definition panel: input model conditions and parameters
   such as temperature, algorithm type and so on.

Reaction Definition panel
~~~~~~~~~~~~~~~~~~~~~~~~~

You can add, edit, hide and delete elementary reaction and energy
information in Reaction Definition panel

|image0|

Add new elementary reaction
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Click the **+ New** button on upper left, a reaction definition modal
would pop up for inputing elementary reaction information.

|image1|

scaks-Hub also can check the correctness of the input reaction
expression and energy values.

Energy barrier is less than reaction energy:

|image2|

Input invalid reaction expression:

|image3|

Edit an existing reaction
^^^^^^^^^^^^^^^^^^^^^^^^^

If you want to edit an existing reaction, just select its select box at
the beginning of the reaction information line and click the **Edit**
button, a similar modal with reaction addition will appears.

|image4|

Visualize energy profile
^^^^^^^^^^^^^^^^^^^^^^^^

Besides operating elementary reactions, you can also visualize the
energy profile for selected reactions:

|image5|

Kinetic Definition panel
~~~~~~~~~~~~~~~~~~~~~~~~

Kinetic Definition panel is used to input model related parameters such
as temperatures, partial pressures for gases, total coverage and solving
iteration related parameters

|image6|

.. |image0| image:: ../_static/reaction_panel.png
.. |image1| image:: ../_static/add_reaction.png
.. |image2| image:: ../_static/invalid_energy.png
.. |image3| image:: ../_static/invalid_reaction.png
.. |image4| image:: ../_static/select_reaction.png
.. |image5| image:: ../_static/energy_profile.png
.. |image6| image:: ../_static/model_definition_panel.png

