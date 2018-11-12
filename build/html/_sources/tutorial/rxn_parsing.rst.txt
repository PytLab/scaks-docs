Parse reaction expressions
--------------------------

scaks has built in a powerful reaction expression parser based on
Python’s regular expression engines. With the help of reaction parser,
you can check the site and mass conservation to make sure scaks can
receive correct reaction expressions and solve correctly.

Species name convetions in scaks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

All species expressions in scaks consist of two parts connected with a
underline ``_``: species name and site name.

For example, a ``CO`` gas molecule adsorbed on a site named ``s`` can be
written as ``CO_s``.

For the transition state species in scaks, it must have a ``-``
character indicating a bond like ``O-O_2s``.

Below are some common species expression examples:

-  ``O2_2s``: A O2 (oxygen molecule) adsorbed on two ``s``\ sites
-  ``CO_b``: A CO (carbon dioxide molecule) adsorbed on one ``b`` site
-  ``O-O_2t`` A transition state for O2 dissociation on two ``s`` sites

Reaction expression conventions in scaks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Each elementary reaction expression consists of different states:
initial state, transition state(optional), final state.

For example, a CO adsorption on a single ``s`` process can be expressed
as:

.. code:: python

   CO_g + *_s -> CO_s

As we can see, we can use arrows ``<->`` or ``->`` to connect all states
to an elementary reaction expression.

If a process is a chemical reaction, usually it has a transition state
in the middle. For example, a O2 dissociation adsorption process can be
written as:

.. code:: python

   O2_g + 2*_s <-> O-O_2s -> O_s + O_s

   # or 

   O2_g + 2*_s <-> O-O_2s -> 2O_s

Parse an elementary reaction
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``scaks.parser.rxn_parser`` provide three main classes to represent
different levels in a reaction expression: ``RxnEquation`` for reaction
equation expression, ``ChemState``\ for chemical state and
``ChemFormula`` for chemical formula.

In this section, we use scaks reaction parser API to parse elementary
reaction expression using a O2 dissociation adsorption process as an
example.

Create reaction equation
^^^^^^^^^^^^^^^^^^^^^^^^

.. code:: python

   from scaks.parsers.rxn_parser import RxnEquation

   rxn_expression = 'O2_g + 2*_s <-> O-O_2s -> 2O_s'

   # Create a reaction equation object
   rxn = RxnEquation(rxn_expression)

Revert equation
^^^^^^^^^^^^^^^

.. code:: python

   reverse_rxn = rxn.revert()
   reverse_rxn.rxn_equation()  # Output: '2O_s <-> O-O_2s -> O2_g + 2*_s'

Check conservation
^^^^^^^^^^^^^^^^^^

.. code:: python

   rxn.check_conservation()  # return True

If we construct an unconserved reaction equation, an exception will be
raised.

Balance a set of elementary reactions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Reaction parser in scaks can help researchers to balance a set of
elementary reactions to obtain the total reaction equation.

Here we take CO Oxidation as an example, the elementary reactions are
listed below:

.. code:: python

   [
       'CO_g + *_s -> CO_s',
       'O2_g + 2*_s <-> O-O_2s -> 2O_s',
       'CO_s + O_s <-> CO-O_2s -> CO2_g + 2*_s'
   ]

After model has been built, we can get the total reaction expression:

.. code:: python

   model.parser.get_total_rxn_equation()

the output would be:

.. code:: python

   '2CO_g + O2_g -> 2CO2_g'
